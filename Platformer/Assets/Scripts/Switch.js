#pragma strict
import UnityEngine;
import System.Collections;

public class Switch extends MonoBehaviour {
	private var animator: Animator;

	public var door : Door;
	function Start () {
		animator = GetComponent.<Animator>();
	}	

	function Update () {

	}
	
	function OnTriggerEnter2D(target) {
		animator.SetInteger("AnimState", 1);
		//door.Open();
	
	}
	
	function OnTriggerExit2D(target) {
		animator.SetInteger("AnimState", 2);
		//door.Close();
	}
}