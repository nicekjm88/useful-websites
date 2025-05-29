import { Menu } from 'antd';
import Link from 'next/link';

const items = [
  { label: <Link href="/calc">평단계산기</Link>, key: 'calc' },
  { label: <Link href="/favorites">즐겨찾기</Link>, key: 'favorites' },
];

export default function Header() {
  return (
    <Menu mode="horizontal" items={items} />
  );
}
