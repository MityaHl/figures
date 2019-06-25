<?php

namespace App\Http\Controllers;

use App\Type;
use Illuminate\Http\Request;

class TypesController extends Controller
{
    public static function index() {
        $types = Type::all();
        return response()->json($types);
    }

    public function show()
    {
        //
    }

    public static function getTypes() {
        $types = Type::all();
        for($i = 0; $i < count($types); $i++)
        {
            $types[$i] = $types[$i]->type;
        }
        return response()->json($types);
    }
}
