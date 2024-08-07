import { useQueryClient } from '@tanstack/react-query';
import { Files, Loader2, NotebookText, Pencil, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';

import { SnippetDto, getGetSnippetsQueryKey, useDeleteSnippet } from '@/lib/api/snippet';

import CodeHighlighter from '../higlight/CodeHighlighter';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

type Props = {
  snippet: SnippetDto;
};

export default function SnippetCard({ snippet }: Props) {
  const maxBadgeCount = 3;
  const [isDeleted, setDeleted] = useState<boolean>();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useDeleteSnippet({
    mutation: {
      onSuccess() {
        setDeleted(true);
      },
      onSettled() {
        queryClient.invalidateQueries({ queryKey: getGetSnippetsQueryKey() });
      }
    }
  });

  return (
    <Card className={isDeleted ? 'opacity-30' : ''}>
      <div className="p-2 flex">
        <Badge variant="secondary">{snippet.language}</Badge>
        <div className="flex-1"></div>
        <div className="flex gap-2">
          {snippet.tags?.slice(0, maxBadgeCount).map((tag, index) => <Badge key={index}>{tag}</Badge>)}
          {snippet.tags && snippet.tags.length > maxBadgeCount && <Badge>+{snippet.tags.length - maxBadgeCount}</Badge>}
        </div>
      </div>
      <Separator className="my-1" />
      <CardHeader className="-mt-[15px]">
        <CardTitle>{snippet.title}</CardTitle>
        <CardDescription>{snippet.description}</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <div className="h-[300px] flex bg-background overflow-auto px-2 ">
          <CodeHighlighter code={snippet.code ?? ''} />
        </div>
      </CardContent>
      <Separator className="mb-3" />
      <CardFooter className="flex justify-between gap-2">
        {isPending ? (
          <Button disabled variant="destructive">
            <Loader2 className="h-4 w-4 animate-spin" />
          </Button>
        ) : (
          <Button
            size="icon"
            variant="destructive"
            onClick={() =>
              mutate({
                id: snippet.id ?? 0
              })
            }
          >
            <X />
          </Button>
        )}
        <div className="flex gap-2">
          <Link href={`/snippet/edit/${snippet.id}`}>
            <Button size="icon" variant="ghost">
              <Pencil />
            </Button>
          </Link>
          <Link href={`/snippet/view/${snippet.id}`}>
            <Button size="icon" variant="ghost">
              <NotebookText />
            </Button>
          </Link>
          <CopyToClipboard onCopy={() => toast.success('Code copied')} text={snippet.code ?? ''}>
            <Button size="icon" variant="ghost">
              <Files />
            </Button>
          </CopyToClipboard>
        </div>
      </CardFooter>
    </Card>
  );
}
