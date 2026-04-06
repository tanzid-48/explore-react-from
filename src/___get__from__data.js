/**
 * 1.e.target.[name of the input field].value
 * 
 * 2.use form action and fromData in the action handler 
 * fromData.get('name of the input filed')
 *
 *  3.controlled component(one for each field) use state on change of the field useful to dynamically handle error
 * 3.
 * handle all controlled field on one state object
 * const [fromData, setFromData] = useState({
 * name: '',
 * password: '',
 * phone: '',
 * 
 * })
 */