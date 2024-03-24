import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { truncate } from "../../utlis/truncate";

export default function ImgMediaCard({
  title,
  description,
  location,
  bedrooms,
  bathrooms,
  price,
  size,
}) {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 600 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
        className="h-64 w-full object-cover"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography>{location}</Typography>
        <Typography variant="body2" color="text.secondary">
          {truncate(description, 100)}
        </Typography>
        <Typography>
          <span className="font-bold">Bedrooms:</span> {bedrooms}
        </Typography>
        <Typography>
          <span className="font-bold">Bathrooms:</span> {bathrooms}
        </Typography>
        <Typography>
          <span className="font-bold">Size:</span> {size} m2
        </Typography>
        <Typography>
          <span className="font-bold">Price:</span> {price} <span>EGP</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
