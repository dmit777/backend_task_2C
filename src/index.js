import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});


app.get('/task2A', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});


function nameContainsNumbers(fullName) {
  if (/(\d|_|\/)/.test(fullName))
    return true;
  else {
    return false;
  }
}

function procName(curName) {
  return curName.toLowerCase().charAt(0).toUpperCase() + '.';
}

function procFamily(familyName) {
  return familyName.charAt(0).toUpperCase() +
  familyName.slice(1).toLowerCase();
}



app.get('/task2B', (req, res) => {
  //console.log(req.query.fullname);
  if (req.query.fullname.length == 0)
    return res.send('Invalid fullname');
  if (nameContainsNumbers(req.query.fullname))
    return res.send('Invalid fullname');

  let iofArr = (req.query.fullname).split(' ');
  iofArr = iofArr.filter(value => {return value != ''});
  //console.log(iofArr.length.toString());
  switch(iofArr.length) {
    case 1: {
      res.send(procFamily(iofArr[0]));
      break;
    }
    case 2: {
      const familyName = procFamily(iofArr[1]) + ' '
      + procName(iofArr[0]);
      res.send(familyName);
      break;
    }
    case 3: {
     const fio = procFamily(iofArr[2]) + ' ' + procName(iofArr[0])
     + ' ' + procName(iofArr[1]);
     res.send(fio);
     break;
    }
    default: {
     res.send('Invalid fullname');
    }
  }
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
