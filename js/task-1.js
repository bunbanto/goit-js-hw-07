const countList = document.querySelector('#categories');
const countFirstChild = countList.querySelectorAll('.item');

console.log(`Number of categories: ${countFirstChild.length}`);

countFirstChild.forEach(item => {
  const Title = item.querySelector('h2').textContent;
  const categoryCount = item.querySelectorAll('ul li').length;

  console.log(`Category: ${Title}`);
  console.log(`Elements: ${categoryCount}`);
});
