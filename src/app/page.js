"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Login from "@/components/Login/Login";
export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {router.push("/home/arslans")}
        {/* <Login/> */}
      </div>
    </main>
  );
}
