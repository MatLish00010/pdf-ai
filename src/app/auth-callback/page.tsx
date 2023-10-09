import {useRouter, useSearchParams} from 'next/navigation';

import {trpc} from '@/app/_trpc/client';

export default function Page() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get('origin ');

  const {data, isLoading} = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({success}) => {
      console.log('lel');
      if (success) {
        // user is asynced
        router.push(origin ? `/${origin}` : '/dashboard');
      }
    },
  });
}
