import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import createError from 'http-errors';

import indexRouter from './routes/index';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use('/', indexRouter);

app.use((req, res, next) => {
    next(createError(404));
});
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

export default app;