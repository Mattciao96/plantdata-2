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

export default function ImageScroll() {
  return (
    <div className="flex flex-col justify-center items-center mb-[120px] md:mb-0">
      <div className="fading relative flex max-w-[100vw] md:w-[60vw] md:max-w-[700px] overflow-hidden max-h-[200px]">
        <div
          className="infinite pr-1 inline-flex"
          style={{ "--t": "20s" } as React.CSSProperties}
        >
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/map.png"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/aquil2.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/planthero.png"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/gentia.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/aquil.jpg"
            alt=""
          />
        </div>
        <div
          className="infinite pr-1 inline-flex"
          style={{ "--t": "20s" } as React.CSSProperties}
        >
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/map.png"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/aquil2.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/planthero.png"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/gentia.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/aquil.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="fading relative flex max-w-[100vw] md:w-[65vw] md:max-w-[750px] overflow-hidden max-h-[200px]">
        <div
          className="infinite pr-1 inline-flex"
          style={{ "--t": "40s" } as React.CSSProperties}
        >
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/aquil.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/gentia.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/planthero.png"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/aquil2.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/map.png"
            alt=""
          />
        </div>
        <div
          className="infinite pr-1 inline-flex"
          style={{ "--t": "40s" } as React.CSSProperties}
        >
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/aquil.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/gentia.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/planthero.png"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/aquil2.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/map.png"
            alt=""
          />
        </div>
      </div>
      <div className="fading relative flex max-w-[100vw] md:w-[60vw] md:max-w-[700px] overflow-hidden max-h-[200px]">
        <div
          className="infinite pr-1 inline-flex"
          style={{ "--t": "30s" } as React.CSSProperties}
        >
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/gentia.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/aquil.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/map.png"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/aquil2.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/planthero.png"
            alt=""
          />
        </div>
        <div
          className="infinite pr-1 inline-flex"
          style={{ "--t": "30s" } as React.CSSProperties}
        >
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/gentia.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/aquil.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/map.png"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/aquil2.jpg"
            alt=""
          />
          <img
            className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
            src="./images/planthero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

/* 
const ImageRow = ({ images, time }) => (
  <div className="fading relative flex max-w-[100vw] md:w-[60vw] md:max-w-[700px] overflow-hidden max-h-[200px]">
    <div className="infinite pr-1 inline-flex" style={{ "--t": `${time}s` } as React.CSSProperties}>
      {images.map((image, index) => (
        <img
          key={index}
          className="min-h-[120px] max-h-[120px] h-[120px] w-auto max-w-none m-1 rounded"
          src={image.url}
          alt={image.title}
        />
      ))}
    </div>
  </div>
);

export default function ImageScroll() {
  return (
    <div className="flex flex-col justify-center items-center mb-[120px] md:mb-0">
      {images.map((imageRow, index) => (
        <ImageRow key={index} images={imageRow.row} time={20 + index * 10} />
      ))}
    </div>
  );
} */