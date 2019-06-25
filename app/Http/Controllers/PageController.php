<?php

namespace App\Http\Controllers;

use App\Type;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        $types = Type::all();
        return view('page', ['types' => $types]);
    }

}
