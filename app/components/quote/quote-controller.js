function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		draw(quote)
	})

	function draw(quotedata){
		var quote = quotedata.quote
		var author = quotedata.author
		var template =`
		<div class="row">
			<div class="col-xs-12 text-center">
				<h4><mark>${quote}</mark></h4>
				<h5><mark>~<strong>${author}</strong></mark></h5>
			</div>
		</div>
		`
		document.getElementById("quote").innerHTML = template
	}
	
}
