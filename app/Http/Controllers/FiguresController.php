<?php

namespace App\Http\Controllers;

use App\Figure;
use Illuminate\Http\Request;

class FiguresController extends Controller
{
    protected $fillable = ['type_id', 'data'];

    public static function index()
    {
        $figures = Figure::orderBy('square')->get();
        return response()->json($figures);
    }

    public function create()
    {
        //
    }

    public function showFigure()
    {
        $figures = Figure::orderBy('square')->get();
        return response()->json($figures);
    }

    public function store(Request $request)
    {
        $data =$request->get('data');
        $type_id = $request->get('type_id');
        $figure = new Figure([
            'type_id' => $type_id,
            'data' => $data,
            'square' => Figure::calcSquare($type_id, $data)
        ]);
        $figure->save();
        return response()->json('Successfully added');
    }

    /*public function show()
    {
        //
    }*/



    public function showSquare()
    {
        $figures = Figure::all();
        $figuresSquare = [];
        for($i = 0; $i < count($figures); $i++)
        {
            if( isset($figuresSquare[$figures[$i]->type_id]))
            {
                $figuresSquare[$figures[$i]->type_id]+=$figures[$i]->square;
            }
            else
            {
                $figuresSquare[$figures[$i]->type_id] = $figures[$i]->square;
            }
        }
        for($i = 1; $i < count($figuresSquare) + 1; $i++)
        {
            $figuresSquare[$i] = round($figuresSquare[$i], 2);
        }
        return response()->json($figuresSquare);
    }



    public function calcPercent()
    {
        $figures = Figure::all();
        $figuresSquare = [];
        $allSquare = 0;
        for($i = 0; $i < count($figures); $i++)
        {
            if( isset($figuresSquare[$figures[$i]->type_id]))
            {
                $figuresSquare[$figures[$i]->type_id]+=$figures[$i]->square;
            }
            else
            {
                $figuresSquare[$figures[$i]->type_id] = $figures[$i]->square;
            }
            $allSquare+=$figures[$i]->square;
        }
        $figuresPercents = [];

        for($i = 0; $i < count($figuresSquare); $i++)
        {
            array_push($figuresPercents, round($figuresSquare[$i+1]/$allSquare*100, 3));
        }
        return response()->json($figuresPercents);
    }



    public function edit($id)
    {
        $figure = Item::find($id);
        return response()->json($figure);
    }

    public function update(Request $request, $id)
    {
        $figure = Figure::find($id);
        $figure->type_id = $request->get('type_id');
        $figure->data = $request->get('data');
        $figure->save();

        return response()->json('Successfully Updated');
    }



    public function destroy(Request $request)
    {
        $id =$request->get('id');
        $figure = Figure::find($id);
        $figure->delete();

        return response()->json('Successfully Deleted');
    }
}
