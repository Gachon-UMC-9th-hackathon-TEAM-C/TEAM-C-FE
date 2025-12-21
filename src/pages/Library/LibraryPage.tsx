import LibrarySearchBar from "../../component/Library/LibrarySearchBar";
import LibraryCategoryFilter from "../../component/Library/LibraryCategoryFilter";
import LibraryWordItem from "../../component/Library/LibraryWordItem";
import LibraryEmptyState from "../../component/Library/LibraryEmptyState";
import { useLibraryStore } from "../../store/useLibraryStore";

export default function LibraryPage() {
  const { filteredWordList } = useLibraryStore();

  return (
    <div className="min-h-screen w-full flex justify-center bg-[#F2F4F6]">

      <div className="w-full max-w-2xl px-6 pt-25 pb-12">

        <h1 className="text-[28px] font-bold leading-[100%] text-[#1B1D1F] mb-8">
          라이브러리
        </h1>


        <LibrarySearchBar />
        <LibraryCategoryFilter />

        <div className="mt-6 flex flex-col gap-4">
          {filteredWordList.length === 0 ? (
            <LibraryEmptyState />
          ) : (
            filteredWordList.map((word) => (
              <LibraryWordItem key={word.id} item={word} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
