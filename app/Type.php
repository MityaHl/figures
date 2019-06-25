<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    public function figure()
    {
        return $this->hasMany(Figure::class);
    }
}
