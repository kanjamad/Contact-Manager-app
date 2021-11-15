

# useEffect() React Hook
* What this useEffect do ?
* Whenever the value actually changes the useEffect help us to render the components again

* Let's storage it in the localStorage
```
const LOCAL_STORAGE_KEY = "contacts";

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
```

* When we refresh the page we want to get the infoemation from the  localStorage and display it.
```

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
```
# Get the unique id
```
npm i uuidv4
```