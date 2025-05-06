import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Home() {
  return (
<div>
<h1>Hello & welcome to the Ai interviewer app</h1>
<Link href="/dashboard">
<Button>Lets build an interview</Button>
</Link>
</div>
  );
}
