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
    <div className="flex flex-col justify-center items-center mb-[120px] md:mb-0">
      <div className="relative my-1 flex justify-center md:rounded max-w-[100vw] md:w-[50vw] md:max-w-[600px] overflow-hidden max-h-[200px]">
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/map.png"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/aquil2.jpg"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/planthero.png"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/gentia.jpg"
          alt=""
        />
      </div>
      <div className="relative my-1 flex justify-center md:rounded max-w-[100vw] md:w-[60vw] md:max-w-[700px] overflow-hidden max-h-[200px]">
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/aquil.jpg"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/gentia.jpg"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/planthero.png"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/aquil2.jpg"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/map.png"
          alt=""
        />
      </div>
      <div className="relative my-1 flex justify-center md:rounded max-w-[100vw] md:w-[50vw] md:max-w-[600px] overflow-hidden max-h-[200px]">
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/gentia.jpg"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/aquil.jpg"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/map.png"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/other/aquil2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
