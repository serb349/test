// Classes
class TextBuilder
{
    // By default all attributes and methods are public

    // Attributes
    private _text: string[];

    // Constructor
    // Only one constructor allowed
    // Note: No return type for a constructor
    constructor(initialText: string)
    {
        this._text = [];            // Must create array before using it!!
        this._text[0] = initialText;
    }

    // Properties
    // Get and Set Accessors
    get Text(): string[]
    {
        return this._text;
    }

    set Text(text: string[])
    {
        this._text = text;
    }

    get Result(): string
    {
        return this.ReadText();
    }

    // Methods
    // Note: You can't overload method names
    // each method must have a unique name
    // regardless of signature!!
    AppendText(text: string): void
    {
        this._text.push(text);  // Append to end
    }

    Undo(): void
    {
        this._text.pop();       // Remove last
    }

    private ReadText(): string
    {
        var output: string = "";

        for (var i in this._text)
        {
            output = output + this._text[i];
        }
        return output;
    }
} 