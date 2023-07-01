import Discussions from "@/components/Discussions";
import QuickLinks from "@/components/QuickLinks";

interface ILatestDiscussions {
  id: string;
  title: string;
  club_name: string;
  date: string;
  chapters: {
    end: string;
    start: string;
  };
}

const getLatestDiscussions = async (): Promise<ILatestDiscussions[]> => {
  const response = await fetch("http://localhost:3000/api/discussions");
  const data = response.json();
  return data;
};

export default async function Home() {
  const discussions = await getLatestDiscussions();

  return (
    <main>
      <QuickLinks title="Create clubs" path="/create-clubs" />
      <QuickLinks title="Browse clubs" path="/browse-clubs" />
      <QuickLinks title="Your clubs" path="/your-clubs" />

      <h2 className="text-2xl mt-4 font-bold">Latest Discussions</h2>

      {!!discussions.length ?
        discussions.map((discussion) => (
          <Discussions
            clubName={discussion.club_name}
            title={discussion.title}
            date={discussion.date}
            chapterStart={discussion.chapters.start}
            chapterEnd={discussion.chapters.end}
          />
        )) :
        <>
          <p>No new discussions right now.</p>
        </>
      }
    </main>
  );
}
