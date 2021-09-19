import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Template } from "../../components/template/Character";

export const Page = () => {
  const router = useRouter();
  const [id, setId] = useState<number>();

  useEffect(() => {
    // routerの変化時に実行
    if (router.asPath !== router.route) {
      // pathにidが注入され次第実行
      setId(Number(router.query.id));
    }
  }, [router]);

  useEffect(() => {
    // idの変化時に実行
    if (!id) return;
  }, [id]);

  return (
    <>
      <Template />
    </>
  );
};

export default Page;
