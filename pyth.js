function fungsi()
{
    var vals = {};

    if( document.getElementById("a").value.length > 0 )
    {
        vals.a = document.getElementById("a").value;
    }
    if( document.getElementById("b").value.length > 0 )
    {
        vals.b = document.getElementById("b").value;
    }
    if( document.getElementById("c").value.length > 0 )
    {
        vals.c = document.getElementById("c").value;
    }

    if( Object.keys(vals).length < 2 )
    {
        alert('Need 2 values');
        return;
    }

    if( typeof vals.a != 'undefined' && typeof vals.b != 'undefined' )
    {
        alert( ( Math.sqrt( vals.a * vals.a + vals.b * vals.b ) ) );
    }
    else if( typeof vals.b != 'undefined' && typeof vals.c != 'undefined' )
    {
        alert( ( Math.sqrt( vals.b * vals.b + vals.c * vals.c ) ) );
    }
    else if( typeof vals.a != 'undefined' && typeof vals.c != 'undefined' )
    {
        alert( ( Math.sqrt( vals.a * vals.a + vals.c * vals.c ) ) );
    }
}