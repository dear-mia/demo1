/*
该代码向提交按钮添加了一个事件侦听器，这会阻止单击时的默认表单提交行为。 然后它执行一些基本验证以确保填写所有字段。 

如果任何字段为空，则会显示警报并且函数会提前返回。如果填写了所有字段，代码会将表单数据记录到控制台（在本例中，只是作为字符串）。

最后，它重置表单字段，以便用户可以根据需要提交另一条消息。
*/
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#submit-button');

// Add event listener to form submit button
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // 阻止单击时的默认表单提交行为

    // Perform some basic form validation
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Send form data to server (in this case, just log it to console)
    console.log(`Name: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`);

    // Reset form fields
    reset();
});

function reset()
{
    nameInput.value="";
    emailInput.value="";
    messageInput.value="";
}