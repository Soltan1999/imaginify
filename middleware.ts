// import { authMiddleware } from "@clerk/nextjs";
 
// export default authMiddleware({});
 
// export const config = {
//   matcher: [
//     "/((?!.+\\.[\\w]+$|_next).*)",
//     "/",
//     "/(api|trpc)(.*)"
//   ]
// };


import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};