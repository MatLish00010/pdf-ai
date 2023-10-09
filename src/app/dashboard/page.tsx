import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';
import {redirect} from 'next/navigation';

import {trpc} from '@/app/_trpc/client';

export default async function Page() {
  const {getUser} = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard');

  const {data} = trpc.test.useQuery();

  return <h1>{user.email}</h1>;
}
