import useStyles from './useStyles';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core';
import { useLanguage } from '../../context/useLanguageContext';
import { useHistory } from 'react-router-dom';
import UnconfirmedReservations from './Statistics/UnconfirmedReservations';

const Home = (): JSX.Element => {
    const { root, card } = useStyles();
    const { language } = useLanguage();
    const history = useHistory()
    const rows = [{id: 1, date: '2022-01-01', from: 'sultanahmet', to: 'ist Airport', flightNo: 'tk123', pax: 5}]
    const cards = [
            {
                cardImg: 'https://airportshuttle0.s3.amazonaws.com/airport-shuttle02.jpeg',
                title: 'Unconfirmed Reservations',
                content: 'Reservations waiting for confirmation!',
                number: 0,
                btnText: 'Show',
                handleClick: () => {history.push('/unconfirmed-reservations')}
            }, {
                cardImg: 'https://airportshuttle0.s3.amazonaws.com/money.jpeg',
                title: 'Debt',
                content: 'clients owe you moeny!!',
                number: 0,
                btnText: 'Show',
                handleClick: () => {history.push('/debt')}
            }
        ]
    return (
    <>
        <Grid container spacing={3} justifyContent="space-evenly" className={root}>
            {cards.map(({ cardImg, title, content, number, btnText, handleClick }) => (
            <Card className={card}>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardImg}
                    alt="Debt"
                />
                <CardContent style={{ backgroundColor:'#2F4F4F' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {`${number} ${content}`}
                    </Typography>
                </CardContent>
                <CardActions style={{ backgroundColor:'#A9A9A9' }}>
                    <Button size="large" onClick={handleClick}>{btnText}</Button>
                </CardActions>
            </Card>
            ))}
        </Grid>
    </>
    );
};

export default Home;