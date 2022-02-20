/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
  let mass=[];
  mass=data.split(',');
  let mass_length=mass.length;
  mass.sort((a, b) => a - b);  
  data=mass.join(',');
  return(data);
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
  let i=0,j=0, data2=[];
  while(i<data.length)
  {
  if(data[i]<100)
  {
   data2 = data2.concat(data[i]);
   i++; j++;
  }
  else i++;
  }
  //alert(data2);
  return(data2);
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
  let i=0, array3=[];
  while((i<array1.length)&&(i<array2.length))
  {
   array3 = array3.concat(array1[i],array2[i]); 
   i++; 
  }
 //alert(array3);
 return(array3);
}
