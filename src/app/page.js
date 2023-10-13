"use client";
import Image from "next/image";
import styles from "./page.module.css";
// import { useRouter } from "next/navigation";
import Login from "@/components/Login/Login";
export default function Home() {
  // const router = useRouter();
  // const token = localStorage.getItem("accessToken");
  // console.log("user Token")
  // console.log("user Token")
  // console.log(token)
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* {token ? router.push("/home/arslan") : router.push("/login")} */}
        {/* {router.push("/home/arslans")} */}
        <Login/>
      </div>
    </main>
  );
}
