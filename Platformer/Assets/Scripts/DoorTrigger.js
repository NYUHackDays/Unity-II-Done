#pragma strict

import UnityEngine;
import System.Collections;

public class DoorTrigger extends MonoBehaviour {

	public var door : Door;
	function Start () {

	}

	function Update () {

	}
	
	function OnTriggerEnter2D(target : Collider2D) {
		door.Open();
	}
	
	function OnTriggerExit2D(target : Collider2D) {
		door.Close();
	}
}