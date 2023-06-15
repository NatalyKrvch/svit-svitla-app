const FeedbackForm = () => {
    return (
        <>
          <h1>Залишити відгук тут</h1>
          <form action="">
            <label htmlFor="rating">Як вам було у Світ Світла?</label>
            <select name="rating" id="rating">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
            </select>
            <textarea type="text"  placeholder="Ваші враження" />
            <button type="submit">Надіслати</button>
          </form>      
        </>
      
    )
}

export default FeedbackForm;