const images = [
  {
    firstrow: [
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
    ],
  },
  {
    secondrow: [
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
    ],
  },
  {
    thirdrow: [
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
      {
        title: "test",
        url: "./images/other/test.jpg",
      },
    ],
  },
];

export default function ImageScrollFixed() {
  return (
    <div className="mb-[120px] flex flex-col items-center justify-center md:mb-0">
      <div className="relative my-1 flex max-h-[200px] max-w-[100vw] justify-center overflow-hidden md:w-[50vw] md:max-w-[600px] md:rounded">
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/map.jpg"
          alt=""
        />
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/aquil2.jpg"
          alt=""
        />
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/planthero.png"
          alt=""
        />
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/gentia.jpg"
          alt=""
        />
      </div>
      <div className="relative my-1 flex max-h-[200px] max-w-[100vw] justify-center overflow-hidden md:w-[60vw] md:max-w-[700px] md:rounded">
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/aquil.jpg"
          alt=""
        />
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/gentia.jpg"
          alt=""
        />
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/planthero.png"
          alt=""
        />
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/aquil2.jpg"
          alt=""
        />
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/map.jpg"
          alt=""
        />
      </div>
      <div className="relative my-1 flex max-h-[200px] max-w-[100vw] justify-center overflow-hidden md:w-[50vw] md:max-w-[600px] md:rounded">
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/gentia.jpg"
          alt=""
        />
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/aquil.jpg"
          alt=""
        />
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/map.jpg"
          alt=""
        />
        <img
          className="mx-1 h-[120px] max-h-[120px] min-h-[120px] w-auto max-w-none rounded"
          src="./images/other/aquil2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
