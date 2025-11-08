const form = document.getElementById('Form');
const data = new FormData( form );


form.addEventListener('submit', handleSumbit);
const handleSumbit =(e) => {
    e.preventDefault();

console.log(data.get('email'));
};


