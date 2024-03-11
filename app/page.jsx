import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className=" w-full flex-center flex-col">
      <h1 className=" head_text text-center">
        Discover & Share 
        <br className=" max-md:hidden" />
        <span className="text-light-blue text-center">Ai Powered Prompts</span>
      </h1>

      <p className=" desc text-center">
        PromptGenius is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
}
