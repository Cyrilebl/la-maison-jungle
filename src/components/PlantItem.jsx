import CareScale from "./CareScale.jsx";

export const PlantItem = ({ id, name, cover, light, water, price }) => {
  return (
    <li className="relative list-none" key={id}>
      <div className="flex flex-col items-center">
        <span className="absolute right-0 top-0 rounded-3xl rounded-bl-none bg-green-600 p-4 font-semibold text-neutral-50">
          {price}€
        </span>
        <img
          className="size-64 rounded-3xl object-cover"
          src={cover}
          alt={`${name} cover`}
        />
        <p className="mt-1 font-medium capitalize">{name}</p>
      </div>
      <CareScale careType="water" scaleValue={water} />
      <CareScale careType="light" scaleValue={light} />
    </li>
  );
};
