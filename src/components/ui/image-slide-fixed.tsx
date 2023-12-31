const images = [
  {
    firstrow: [
      {
        title: "test",
        url: "./images/test.jpg",
      },
      {
        title: "test",
        url: "./images/test.jpg",
      },
      {
        title: "test",
        url: "./images/test.jpg",
      },
      {
        title: "test",
        url: "./images/test.jpg",
      },
      {
        title: "test",
        url: "./images/test.jpg",
      },
    ],
  },
  {
    secondrow: [
      {
        title: "test",
        url: "./images/test.jpg",
      },
      {
        title: "test",
        url: "./images/test.jpg",
      },
      {
        title: "test",
        url: "./images/test.jpg",
      },
      {
        title: "test",
        url: "./images/test.jpg",
      },
      {
        title: "test",
        url: "./images/test.jpg",
      },
    ],
  },
  {
    thirdrow: [
      {
        title: "test",
        url: "./images/test.jpg",
      },
      {
        title: "test",
        url: "./images/test.jpg",
      },
      {
        title: "test",
        url: "./images/test.jpg",
      },
      {
        title: "test",
        url: "./images/test.jpg",
      },
      {
        title: "test",
        url: "./images/test.jpg",
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
          src="./images/map.png"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/aquil2.jpg"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/planthero.png"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/gentia.jpg"
          alt=""
        />
      </div>
      <div className="relative my-1 flex justify-center md:rounded max-w-[100vw] md:w-[60vw] md:max-w-[700px] overflow-hidden max-h-[200px]">
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/aquil.jpg"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/gentia.jpg"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/planthero.png"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/aquil2.jpg"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/map.png"
          alt=""
        />
      </div>
      <div className="relative my-1 flex justify-center md:rounded max-w-[100vw] md:w-[50vw] md:max-w-[600px] overflow-hidden max-h-[200px]">
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/gentia.jpg"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/aquil.jpg"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/map.png"
          alt=""
        />
        <img
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none mx-1 rounded"
          src="./images/aquil2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
