import type { ProductInfo } from "@/types/product/product-type"
import ProductDetail from "@/components/product/product-detail"

interface ProductDetailProps {
  params: {
    productNo: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const productData: ProductInfo = {
    productNo: "1",
    productNm: "강의 1",
    tags: ["Java Script", "Apple"],
    imgPath: "https://www.hanbitn.com/wp-content/uploads/aa24050004.png",
    desc: {
      title: "실제 스타트업 사례로 배우는 실무 설계 🛠️",
      subTitle: "백엔드 설계의 A부터 Z까지에 이르는\n" +
        "모든 실무를 미리 살피고 경험하세요!",
      description: "여기 처음 스타트업에 합류한 백엔드 개발자가 있습니다. \n" +
        "\n" +
        "그는 복잡한 요구사항을 듣고 처음으로 백엔드 부분을 설계해야 합니다. 처음에는 잘 해나가고 있다고 생각했는데 막상 서비스를 오픈했더니 생각하지 못했던 문제들이 하나씩 등장하기 시작합니다.\n" +
        "\n" +
        "어찌저찌 대처를 하긴 했지만 기술 부채가 빠르게 늘어나는 것 같습니다.\n" +
        "\n" +
        "“왜 미리 생각하지 못했을까?”\n" +
        "“미리 알았다면 어떤 식으로 설계해야 했을까?”\n" +
        "\n" +
        "그는 뒤늦게 고민에 빠져들지만 해결책은 눈 앞에 보이지 않습니다. 스타트업 개발자에게 매우 빈번하게 일어나는 일이기도 하죠. \n" +
        "\n" +
        "이 클래스는 개발자들이 위와 같은 상황을 방지하고 대응할 수 있도록, 백엔드 설계의 실무를 살피고 경험할 수 있게 기획됐어요. 처음 내 서비스를 만들어보거나 스타트업에 이제 막 합류한 개발자라면 이 클래스와 함께 백엔드 설계를 익혀보세요. 분명 도움이 될 겁니다.",
      whatToLearn: "<h3 style='font-size: 20px; font-weight: bold'>1.백엔드 설계의 기본 업무와 프로세스</h3>" +
        "<br /><p>백엔드 설계의 기본 프로세스를 익혀봅니다. 설계에 필요한 요구사항을 정리하기 위해 어떤 일들을 해야 하는지 구체적으로 배워봅시다. 기술 스택과 아키텍처 모델을 적절하게 선택할 수 있게 되며, 백엔드 설계를 전체적으로 어떻게 해야 하는지도 이해할 수 있게 될 겁니다.</p>",
      WhoFor: "백엔드 설계를 경험해보고 싶은 주니어 개발자\n" +
        "스타트업에 참여해보고 싶은 백엔드 개발자\n" +
        "다양한 설계방식을 경험해보고 싶은 개발자",
      afterClass: "백엔드 설계를 하기 위한 기본 업무와 프로세스를 이해할 수 있습니다.\n" +
        "개발자 스스로 챙겨야 하는 요구사항과 일처리 방식을 이해할 수 있습니다.\n" +
        "설계과정에서 기술부채를 최소화하고, 사업 변화에 유연하게 대처하는 방법을 배우게 됩니다."
    },
    norPrice: 10000,
    salePrice: 8000,
    saleRate: 20,
    lecturer: {
      lecturerNm: "강사 1",
      desc: "강사 소개 \n강사 소개2",
      career: ["경력1", "경력2"],
      books: ["저서1", "저서2"],
    },
    playList: [
      {
        title: "강의 1",
        url: "https://www.hanbitn.com/lessons/aa24050007_03/",
        hasPreview: true,
        playTime: "10:00",
      },
      {
        title: "강의 2",
        url: "https://www.youtube.com/watch?v=2",
        hasPreview: false,
        playTime: "10:00",
      },
    ],
    relatedContents: [
      {
        title: "처음 배우는 셸 스크립트",
        url: "https://hanbit.co.kr/store/books/look.php?p_code=B9171469683%20",
        imgPath: "https://www.hanbit.co.kr/data/books/B9171469683_l.jpg",
        author: "장현정",
        publisher: "한빛미디어",
        year: "2021",
      },
      {
        title: "처음 배우는 셸 스크립트",
        url: "https://hanbit.co.kr/store/books/look.php?p_code=B9171469683%20",
        imgPath: "https://www.hanbit.co.kr/data/books/B9171469683_l.jpg",
        author: "장현정",
        publisher: "한빛미디어",
        year: "2021",
      },
      {
        title: "처음 배우는 셸 스크립트",
        url: "https://hanbit.co.kr/store/books/look.php?p_code=B9171469683%20",
        imgPath: "https://www.hanbit.co.kr/data/books/B9171469683_l.jpg",
        author: "장현정",
        publisher: "한빛미디어",
        year: "2021",
      },
    ],
    reviews: [
      {
        reviewNo: "1",
        reviewWriter: "리뷰어 1",
        reviewContent: "리뷰 내용 1",
        reviewRate: 5,
        reviewDate: "2024-01-05",
      },
      {
        reviewNo: "2",
        reviewWriter: "리뷰어 2",
        reviewContent: "리뷰 내용 12",
        reviewRate: 3,
        reviewDate: "2024-01-05",
      }
    ],
    purchaseInfo: {
      salePrice: 8000,
      norPrice: 10000,
      category: "카테고리",
      author: "강사 1",
      totalPlayTerm: 10,
      totalPlayTime: "3시간 4분",
      storagePeriod: "제한없음",
      recommendPeriod: "30일"
    }
  }

  return (
    <>
      <ProductDetail productData={productData} />
    </>
  )
}
