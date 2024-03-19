export default function ListItem({ image, description, title, id }) {
  return (
    <div className="flex gap-4 bg-gray-200 p-2 shadow rounded w-fit h-fit">
      <div className="">
        <img src={image} alt={title} />
      </div>
      <div className="flex flex-col">
        <div>{id}</div> <div>{title}</div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
