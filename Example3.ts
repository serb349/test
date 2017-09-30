// Ensure TypeScript compiler is load for VS versions
// below 2015.
// https://www.microsoft.com/en-us/download/details.aspx?id=48739
// Will need a TypeScript definition file for jQuery
// jquery.d.ts (see NuGet jQuery.TypeScript.DefinedType)
$(function ()
{
    var output: string = "";

    function DisplayLine(text: string): void
    {
        output = output + text + "<br/>";
    }

    // CLASSES
    // var tb: TextBuilder;
    var tb: TextBuilder = new TextBuilder("How");

    tb.AppendText(" Are You");
    tb.AppendText(" Today");
    DisplayLine(tb.Result);
    tb.Undo();
    DisplayLine(tb.Result);

    document.body.innerHTML = output;
});  