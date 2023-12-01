"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {isClient && router.push("/home/arslan")}
      </div>
    </main>
  );
}
