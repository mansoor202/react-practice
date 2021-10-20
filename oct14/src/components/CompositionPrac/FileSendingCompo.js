export function FileSendingComponent(props) {
  return (
    <>
      <p>Choose the File to Send</p>
      <form>
        <input type="file" id="myFile" name="filename" />
        <input type="submit" />
      </form>
    </>
  );
}
