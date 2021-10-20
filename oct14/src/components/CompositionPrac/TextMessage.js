export function TextMessage(props) {
  return (
    <>
      <h1>Text-Message Box</h1>

      <form>
        Name: <input type="text" name="usrname" />
        <br /><br/>
        <textarea rows="4" cols="50" name="comment" form="usrform">
          Enter text here...
        </textarea>
        <br />
        <input type="submit" />
      </form>

    
    </>
  );
}
