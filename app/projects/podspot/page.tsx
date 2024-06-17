import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Podspot</h1>
      <div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Overview
        </h2>
        <Separator />
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
          Podspot is an app designed to let you listen, comment, and rate your
          favorite podcasts.
        </p>
      </div>
      <div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Use Case
        </h2>
        <Separator />
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
          Podcast enthusiasts often encounter thought-provoking or engaging
          segments that they wish to share with others. This app streamlines the
          process of curating and disseminating these captivating moments by
          allowing users to seamlessly pinpoint and share specific timestamps
          from podcasts. This user-friendly solution facilitates effortless
          discovery and exploration of the most compelling content, fostering
          enriching discussions and amplifying the overall podcast experience
          for enthusiasts and their social circles.
        </p>
      </div>
    </section>
  );
}
