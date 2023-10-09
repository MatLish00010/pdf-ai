import {useRouter, useSearchParams} from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get('origin ');
}
