//task 2
const ticketList= document.querySelector("#ticketList");

async function retrieveUnresolvedTickets(userId)
{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        if (!response.ok) {
            throw new Error('Failed to fetch ticket data'); //throw error if fetch fails
        }
        const tickets = await response.json();
        if (tickets.length === 0) { //check for tickets within array
            throw new Error('No tickets found.');
        }
        tickets.forEach(ticket => { //display ticket details
            const listItem = document.createElement('li');
            listItem.textContent = `Ticket ID: ${ticket.id}, Customer Name: ${ticket.userId}, Issue Description: ${ticket.title}, Details: ${ticket.body}`;
            ticketList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error.message); //catch error
    }
}

retrieveUnresolvedTickets(); //initialize function
