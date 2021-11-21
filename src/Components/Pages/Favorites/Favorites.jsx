import React from 'react'
import './favorites.css'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {DeleteWeather } from "../../../Actiones";
import { useSelector,useDispatch } from 'react-redux'

 const Favorites = () => {
    const data = useSelector((state) => state)
    const dispatch = useDispatch()
    return (
        <div  id="favorite-container">
            <h1 className="favorite-headline">favorite page</h1>

            {
                data.map(item=>{
                    return (
                        <div className="favorite-cards">
                        <Card key={item.key} >
                            <img src={item.img} width="200px" height=" 150px" alt="" />
              <CardActionArea>
                <CardContent>
                  <Typography component={'span'} variant={'body2'}>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <h2>{item.city}</h2>
                    <h2>{item.temp}</h2>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                    onClick={() => {
                      dispatch(DeleteWeather(item.key));
                    }}
                    size="small"
                    color="primary"
                  >
                    remove from favorite
                  </Button>
              </CardActions>
            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Favorites;
