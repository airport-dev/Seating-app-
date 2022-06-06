import { Middleware } from "@nuxt/types";

const authenticated: Middleware = (context) => {
  // ログインしていない場合は認証画面へ強制リダイレクト
  //   if (!context.store.state.authenticated) {
  //   }
  console.log("ミドルウェアは動いているぽい？");
  //   return context.redirect("/");
};

export default authenticated;
