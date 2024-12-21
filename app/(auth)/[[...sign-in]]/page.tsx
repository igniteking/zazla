import { SignIn } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
export default function Page() {
  return (
    <div className="flex justify-center p-5">
      <SignIn
        appearance={{
          baseTheme: dark,
        }}
      />
    </div>
  );
}
