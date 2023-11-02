import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function UICard({
  moment,
  state
}) {
  return (
    <Card className="py-4 absolute top-1 left-5 z-6">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">{moment.name}</h4>
        <button onClick={(() => state(null))}>Close</button>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={moment.imageLink}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
