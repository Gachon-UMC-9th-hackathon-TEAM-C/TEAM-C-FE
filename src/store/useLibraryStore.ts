import { create } from "zustand";

export type WordType = {
  id: number;
  title: string;
  description: string;
  tag: string;
};

interface LibraryStoreType {
  searchText: string;
  selectedCategory: string;
  wordList: WordType[];
  filteredWordList: WordType[];
  setSearchText: (text: string) => void;
  setCategory: (category: string) => void;
  filterList: () => void;
}

export const useLibraryStore = create<LibraryStoreType>((set, get) => ({
  searchText: "",
  selectedCategory: "전체",

  // --------------- MOCK DATA ----------------
  wordList: [
    // 물가
    { id: 1, title: "인플레이션", description: "물가가 지속적으로 상승하는 현상", tag: "물가" },
    { id: 2, title: "디플레이션", description: "물가가 지속적으로 하락하는 현상", tag: "물가" },
    { id: 3, title: "소비자물가지수", description: "가격이 구입하는 상품과 서비스의 가격 변동을 측정하는 지표", tag: "물가" },
    { id: 4, title: "스태그플레이션", description: "경기침체와 물가상승이 동시에 일어나는 현상", tag: "물가" },

    // 금리
    { id: 5, title: "기준금리", description: "중앙은행이 시중은행에 돈을 빌려줄 때 적용하는 기준이 되는 금리", tag: "금리" },
    { id: 6, title: "양적완화", description: "중앙은행이 시중에 돈을 푸는 통화정책", tag: "금리" },
    { id: 7, title: "환율", description: "자국 화폐와 외국 화폐의 교환 비율", tag: "금리" },

    // 투자
    { id: 8, title: "복리", description: "원금과 이자를 합친 금액에 다시 이자가 붙는 방식", tag: "투자" },
    { id: 9, title: "주가지수", description: "주식시장의 전체 또는 특정 그룹 주식들의 가격 변동률을 나타내는 지표", tag: "투자" },
    { id: 10, title: "분산투자", description: "위험을 줄이기 위해 여러 자산에 나누어 투자하는 전략", tag: "투자" },
    { id: 11, title: "부채비율", description: "자기자본 대비 부채의 비율", tag: "투자" },
    { id: 12, title: "유동성", description: "자산을 현금으로 쉽게 바꿀 수 있는 정도", tag: "투자" },
    { id: 13, title: "배당", description: "기업이 벌어들인 이익을 주주들에게 나눠주는 것", tag: "투자" },
    { id: 14, title: "자산배분", description: "투자 목적에 맞게 자산을 여러 종류로 나누어 배치하는 전략", tag: "투자" },

    // 재정
    { id: 15, title: "GDP", description: "한 나라에서 일정 기간 생산된 모든 최종 재화와 서비스의 시장가치 총합", tag: "재정" },
    { id: 16, title: "재정정책", description: "정부가 세금과 지출을 조절하여 경기를 조율하는 정책", tag: "재정" },
    { id: 17, title: "경기침체", description: "GDP가 2분기 연속 감소하는 등 경제활동이 위축되는 상태", tag: "재정" },
    { id: 18, title: "무역수지", description: "수출액에서 수입액을 뺀 값", tag: "재정" },
    { id: 19, title: "베이비붐", description: "특정 시기에 출생률이 급격히 증가하는 현상", tag: "재정" },
    { id: 20, title: "실업률", description: "경제활동인구 중 실업자가 차지하는 비율", tag: "재정" }
  ],

  filteredWordList: [],

  // ---------------- ACTIONS ----------------
  setSearchText: (text) => {
    set({ searchText: text });
    get().filterList();
  },

  setCategory: (category) => {
    set({ selectedCategory: category });
    get().filterList();
  },

  filterList: () => {
    const { searchText, selectedCategory, wordList } = get();
    let filtered = [...wordList];

    if (selectedCategory !== "전체") {
      filtered = filtered.filter((item) => item.tag === selectedCategory);
    }

    if (searchText.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.title.includes(searchText.trim())
      );
    }

    set({ filteredWordList: filtered });
  }
}));
