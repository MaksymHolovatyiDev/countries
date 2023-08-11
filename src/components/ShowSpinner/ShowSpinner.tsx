import { ReactNode } from 'react';

import Spinner from '@components/Spinner/Spinner';

export default function ShowSpinner({
  show,
  children,
}: {
  show: any;
  children: ReactNode;
}) {
  return show ? <Spinner /> : children;
}
